using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using prjEmps.Models;

namespace prjEmps.Controllers
{
    public class HomeController : Controller
    {
        dbEmpEntities db = new dbEmpEntities(); // new一個資料庫物件來使用

        // GET: Home
        public ActionResult Index()
        {
            var emps = db.tEmployee.OrderByDescending(m => m.fId).ToList();
            return View(emps); //將emps傳回view
        }

        // 透過打網址的 GET 方式
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        // 傳入前端form裡對應的 input 控制項的 name 屬性值
        public ActionResult Create(string fName, string fPhone, int fSalary)
        {
            tEmployee emp = new tEmployee();
            emp.fName = fName;
            emp.fPhone = fPhone;
            emp.fSalary = fSalary;

            db.tEmployee.Add(emp); // 新增資料到DB物件
            db.SaveChanges(); // 儲存資料庫變更
            return RedirectToAction("Index"); // 重新執行 Index Action
        }

        // GET
        // 將 url 帶的 fId 參數以 int 型別傳入且參數名稱必須相同! URL?act=1 則參數必須是 int act
        //若傳入多個參數則將各參數命名都列上來
        public ActionResult Edit(int fId) 
        {
            var emp = db.tEmployee.Where(m => m.fId == fId).FirstOrDefault(); // FirstOrDefault沒取到就會是Null
            return View(emp); //傳回找到的相對應 id 的員工資料
        }

        [HttpPost]
        public ActionResult Edit(int fId, string fName, string fPhone, int fSalary)
        {
            var emp = db.tEmployee.Where(m => m.fId == fId).FirstOrDefault();
            // 更新資料庫的資料為 key in 的資料
            emp.fName = fName;
            emp.fPhone = fPhone;
            emp.fSalary = fSalary;

            db.SaveChanges(); // 直接儲存
            return RedirectToAction("Index");
        }

    }
}