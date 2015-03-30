﻿using CCTracking.Api.App_Start;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class NearestCentreController : ApiController
    {
       

        [HttpGet]
        public NearestCentreResponse GetAll(int idAll)
        {
            DBFacade facade = new NearestCentreDal("GetAll");
            BaseModelResponse baseModelResponse = facade.GetAll(idAll);
            NearestCentreResponse response = (NearestCentreResponse)baseModelResponse;
            return response;
        }

        /// <summary>
        /// Return NearestCentre list based on centreId
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public NearestCentreResponse GetByCriteria(int id)
        {
            DBFacade facade = new NearestCentreDal("GetByCriteria");
            BaseModelResponse baseModelResponse = facade.GetByCriteria(new NearestCentre {BusId = id});
            NearestCentreResponse response = (NearestCentreResponse) baseModelResponse;
            return response;
        }
    }
}
