using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using CCTracking.Api.App_Start;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class BookingSummaryController : ApiController
    {
        [HttpPost]
        public BookingSummaryResponse GetByCriteria(SearchCriteria criteria)
        {
            DBFacade facade = new BookingSummaryDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            BookingSummaryResponse bookingResponse = (BookingSummaryResponse)baseModelResponse;
            return bookingResponse;
        }
    }
}
