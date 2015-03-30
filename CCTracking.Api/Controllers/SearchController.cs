using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using CCTracking.Api.App_Start;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class SearchController : ApiController
    {
        [HttpPost]
        public BaseModelResponse GetByCriteria(SearchCriteria criteria)
        {
            DBFacade facade = new SearchDal();
            facade.IsGridDisplay = true;
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            return baseModelResponse;
        }
    }
}
