using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class BusCentreReportController : ApiController
    {
        [HttpPost]
        public BookingSummaryResponse GetByCriteria(SearchCriteria criteria)
        {
            DBFacade facade = new BusCentreReportDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            BookingSummaryResponse bookingResponse = (BookingSummaryResponse)baseModelResponse;
            return bookingResponse;
        }

        [HttpPost]
        public BookingSummaryResponse GetByCriteria(short id)
        {
            SearchCriteria criteria = new SearchCriteria { CentreId = id };
            DBFacade facade = new BusCentreReportDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            BookingSummaryResponse bookingResponse = (BookingSummaryResponse)baseModelResponse;
            return bookingResponse;
        }
    }
}
