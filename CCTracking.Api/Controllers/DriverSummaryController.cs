using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using CCTracking.Api.App_Start;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class DriverSummaryController : ApiController
    {
        [HttpGet]
        public DriverResponse GetAllSummary()
        {
            DBFacade facade = new DriverSummaryDal();
            BaseModelResponse baseModelResponse = facade.GetAll(0);
            DriverResponse driverResponse = (DriverResponse)baseModelResponse;
            return driverResponse;
        }
        [HttpGet]
        public DriverResponse GetAllDetail(int id)
        {
            DBFacade facade = new DriverSummaryDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(new Driver {Id = id});
            DriverResponse driverResponse = (DriverResponse)baseModelResponse;
            return driverResponse;
        }
    }
}
