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
    }
}