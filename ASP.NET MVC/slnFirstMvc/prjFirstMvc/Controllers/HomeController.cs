using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using prjFirstMvc.Models;

namespace prjFirstMvc.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public string Index()
        {
            return "進站時間:"+DateTime.Now.ToString();
        }
        public ActionResult ShowTime() // 在Action右鍵>新增檢視(View)，會比照controller名稱將新增的view分類，勾選版面配置會自動套Bootstrap
        {
            ViewBag.DateTime = DateTime.Now.ToString(); // 存在ViewBag的動態屬性DateTime裡面
            return View();
        }
        public ActionResult ShowEmp()
        {
            CEmployee[] emps = new CEmployee[]
            {
                new CEmployee(){  fId=1, fName="吳小瓜", fSalary=40000},
                new CEmployee(){  fId=2, fName="林阿呆", fSalary=50000},
                new CEmployee(){  fId=3, fName="洪通通", fSalary=45000}
            };
            return View(emps.ToList()); // 把資料丟回View去顯示
        }
    }
}