using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class HomeController : ApiController
    {
        [HttpPost]
        public HomeResponse GetAll(Home home)
        {
            DBFacade facade = new HomeDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(new Home {FromDate = home.FromDate, ToDate = home.ToDate});

            HomeResponse homeResponse = (HomeResponse)baseModelResponse;
            return homeResponse;
        }

        //[HttpGet]
        //public BusResponse GetById(int id)
        //{
        //    DBFacade facade = new BusDal();
        //    BaseModelResponse baseModelResponse = facade.GetById(id);
        //    BusResponse busResponse = (BusResponse)baseModelResponse;
        //    return busResponse;
        //}
    }
}
