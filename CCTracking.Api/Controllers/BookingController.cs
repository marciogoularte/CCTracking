using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    public class BookingController : ApiController
    {
        //BookingStore _bookingStore = new BookingStore();        
        static int rowCounter = 1;



        [HttpPost]
        public CCTracking.Dto.Booking SaveBooking(CCTracking.Dto.Booking booking)
        {
            if (booking != null)
            {
                //booking.Id = rowCounter++;
                DBFacade facade = new CCTracking.DAL.BookingDal();
                BaseModelResponse bookingResponse = facade.Execute(booking);
                //var a = facade.Execute(booking);
                booking = ((BookingResponse)bookingResponse).BookingModel;
                //bookings.Add(booking);
            }
            return booking;
        }

        [HttpGet]
        public LookupResponse BookingDefault()
        {
            DBFacade facade = new CCTracking.DAL.LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }
        [HttpGet]
        public BookingResponse GetAll(string a)
        {
            DBFacade facade = new CCTracking.DAL.BookingDal();
            BaseModelResponse baseModelResponse = facade.GetAll();
            BookingResponse bookingResponse = (BookingResponse)baseModelResponse;
            return bookingResponse;
        }
        [HttpGet]
        public BookingResponse GetById(int id)
        {
            DBFacade facade = new CCTracking.DAL.BookingDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            BookingResponse bookingResponse = (BookingResponse)baseModelResponse;
            return bookingResponse;
        }
       


    }
}
