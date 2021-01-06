using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace prjActionMethod.Controllers
{
    public class HomeController : Controller
    {
        // 建立兩個字串陣列
        string[] name = new string[] { "王小明", "李小華", "蔡小呆" };
        int[] score = new int[] { 78, 90, 56 };

        // GET: Home
        // 沒寫 [Http~] 的話，預設即是 GET ，所以不寫 [httpGet] 也沒差
        public String Index() // 回傳字串
        {
            string show = "";
            for (int i = 0; i < name.Length; i++)
            {
                show +=
                    "<ul>" +
                      "<li>姓名：" + name[i] +
                      "<li>成績：" + score[i] +
                    "</ul>";
            }
            return show;
        }

        // 測試網址 https://localhost:44347/Home/Sample01?Index=1 需帶入參數否則 Action 執行會出錯
        public String Sample01(int index)
        {
            string show = "";
            show +=
                "<ul>" +
                  "<li>姓名：" + name[index] +
                  "<li>成績：" + score[index] +
                "</ul>";
            return show;
        }
    }
}