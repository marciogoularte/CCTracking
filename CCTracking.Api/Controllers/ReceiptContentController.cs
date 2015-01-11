using System.Collections.Generic;
using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class ReceiptContentController : ApiController
    {

        [HttpGet]
        public ReceiptContentResponse GetById(int id)
        {
            DBFacade facade = new ReceiptContentDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            ReceiptContentResponse busResponse = (ReceiptContentResponse)baseModelResponse;
            List<ReceiptContent> list=new List<ReceiptContent>();
            list.Add(busResponse.ReceiptContentModel);
            busResponse.ReceiptContentList = list;
            return busResponse;
        }
    }
}
