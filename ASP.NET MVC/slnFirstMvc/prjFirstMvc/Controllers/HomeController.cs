using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjFirstMvc.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public string Index()
        {
            return "進站時間:"+DateTime.Now.ToString();
        }
        public ActionResult ShowTime() // 在Action右鍵>新增檢視(View)，會比照controller名稱將新增的view分類
        {
            ViewBag.DateTime = DateTime.Now.ToString(); // 存在ViewBag的動態屬性DateTime裡面
            return View();
        }
    }
}