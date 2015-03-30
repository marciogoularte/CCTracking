using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using CCTracking.Api.App_Start;
using CCTracking.Api.Helpers;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    public class LookupController :  ApiController
    {

        [HttpGet]
        public LookupResponse BookingDefault()
        {
            DBFacade facade = new LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }

    }
}
