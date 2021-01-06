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
        public ActionResult Create(string fName, string fPhone, int fSalary) // 傳入前端form裡對應的input name
        {
            tEmployee emp = new tEmployee();
            emp.fName = fName;
            emp.fPhone = fPhone;
            emp.fSalary = fSalary;

            db.tEmployee.Add(emp); // 新增資料到DB物件
            db.SaveChanges(); // 儲存資料庫變更
            return RedirectToAction("Index"); // 重新執行 Index Action
        }


    }
}