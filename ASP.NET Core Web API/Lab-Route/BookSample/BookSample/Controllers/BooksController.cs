using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookSample.Models;

namespace BookSample.Controllers
{
    //[Route("api/[controller]")]
    [Route("books")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookSampleContext _context;

        public BooksController(BookSampleContext context)
        {
            _context = context;
        }

        // GET: api/Books
        [Route("")]
        [HttpGet]
        public IEnumerable<Book> GetBook()
        {
            return _context.Book;
        }

        // GET: api/Books/5
        [Route("{id:int}")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBook([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var book = await _context.Book.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        // 依類型取得書籍
        [HttpGet]
        [Route("{genre}")]
        public IActionResult GetBookByGenre(string genre)
        {
            var books = _context.Book.Include(b => b.Author)
                                .Where(b => b.Genre.Equals(genre));

            return Ok(books);
        }

        //依作者取得書籍
        [HttpGet]
        [Route("~/authors/{authorId:int}/books")]
        public IActionResult GetBooksByAuthor(int authorId)
        {
            var author = _context.Book
                                .Include(b => b.Author)
                                .Where(b => b.AuthorId == authorId);

            return Ok(author);
        }

        //依出版日期取得書藉
        [HttpGet]
        [Route("date/{publishdate:datetime}")]
        public IActionResult Get(DateTime publishdate)
        {
            var books = _context.Book
                .Include(b => b.Author)
                .Where(b => b.PublishDate == publishdate);

            return Ok(books);
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook([FromRoute] int id, [FromBody] Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != book.BookId)
            {
                return BadRequest();
            }

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books
        [HttpPost]
        public async Task<IActionResult> PostBook([FromBody] Book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Book.Add(book);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = book.BookId }, book);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var book = await _context.Book.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Book.Remove(book);
            await _context.SaveChangesAsync();

            return Ok(book);
        }

        private bool BookExists(int id)
        {
            return _context.Book.Any(e => e.BookId == id);
        }
    }
}