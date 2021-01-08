using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjController.Controllers
{
    public class Sample03Controller : Controller
    {
        // GET: Sample03
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(FormCollection forms)
        {
            ViewBag.PId = forms["PId"]; // forms[0] 意指表單的第一個欄位，以此例來看意思相同
            ViewBag.PName = forms["PName"]; // 對應的key拼錯字就GG取不到，似以前的request.form用法
            ViewBag.Price = forms["Price"];
            return View();
        }
    }
}