using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjController.Controllers
{
    public class Sample01Controller : Controller
    {
        // GET: Sample01
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(string PId, string PName, int Price)
        {
            // 將傳入的值存進 ViewBag
            ViewBag.PId = PId;
            ViewBag.PName = PName;
            ViewBag.Price = Price;

            return View();
        }
    }
}