using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class SearchController : ApiController
    {
        [HttpPost]
        public BaseModelResponse GetByCriteria(SearchCriteria criteria)
        {
            DBFacade facade = new BookingDal();
            facade.IsGridDisplay = true;
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            //BookingResponse bookingResponse = (BookingResponse)baseModelResponse;
            return baseModelResponse;
        }
    }
}
