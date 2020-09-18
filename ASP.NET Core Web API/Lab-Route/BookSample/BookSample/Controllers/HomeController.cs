using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BookSample.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        [Route("")]
        [Route("Home")]
        [Route("Home/Index")]
        public IActionResult Index()
        {
            return Ok("Index");
        }
        [Route("Home/About")]
        public IActionResult About()
        {
            return Ok("About");
        }
        [Route("Home/Contact")]
        public IActionResult Contact()
        {
            return Ok("Contact");
        }
    }
}