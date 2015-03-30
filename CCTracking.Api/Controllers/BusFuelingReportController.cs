using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using CCTracking.Api.App_Start;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class BusFuelingReportController : ApiController
    {
        [HttpPost]
        public BookingSummaryResponse GetByCriteria(SearchCriteria criteria)
        {
            DBFacade facade = new BusFuelingDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            BookingSummaryResponse bookingResponse = (BookingSummaryResponse)baseModelResponse;
            return bookingResponse;
        }

        [HttpPost]
        public BookingSummaryResponse GetByCriteria(short id)
        {
            SearchCriteria criteria = new SearchCriteria { CentreId = id };
            DBFacade facade = new BusFuelingDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            BookingSummaryResponse bookingResponse = (BookingSummaryResponse)baseModelResponse;
            return bookingResponse;
        }
    }
}
