using prjController.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjController.Controllers
{
    public class Sample02Controller : Controller
    {
        // GET: Sample02
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Product p) // 引用類別+using
        {
            ViewBag.PId = p.PId; // 類別中的屬性若 form 中有同屬性 name 的欄位就會直接帶入
            ViewBag.PName = p.PName;
            ViewBag.Price = p.Price;
            return View();
        }
    }
}