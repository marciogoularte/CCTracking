using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class BusMilageController : ApiController
    {
        [HttpPost]
        public BookingSummaryResponse GetByCriteria(SearchCriteria criteria)
        {
            DBFacade facade = new BusMilageDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            BookingSummaryResponse response = (BookingSummaryResponse)baseModelResponse;
            return response;
        }
    }
}
