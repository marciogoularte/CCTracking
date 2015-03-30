using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Web.Http;
using System;
using CCTracking.Api.App_Start;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class NearestCentreSetupController : ApiController
    {
        [HttpPost]
        public Dto.NearestCentre SaveNearesetCentre(NearestCentre nearestCentre)
        {
            if (nearestCentre != null)
            {
                DBFacade facade = new NearestCentreSetupDal();
                if (nearestCentre.Id <= 0)
                {
                    nearestCentre.CreatedDate = nearestCentre.ModifiedDate = DateTime.Today;
                    nearestCentre.CreatedBy = nearestCentre.ModifiedBy;
                }
                else
                {
                    nearestCentre.ModifiedDate = DateTime.Today;
                }
                BaseModelResponse response = facade.Execute(nearestCentre);
                nearestCentre = ((NearestCentreResponse)response).NearestCentreModel;
            }
            return nearestCentre;
        }


        [HttpGet]
        public NearestCentreGridResponse GetAll(string idAll)
        {
            DBFacade facade = new NearestCentreSetupDal();
            BaseModelResponse baseModelResponse = facade.GetAllGrid();
            NearestCentreGridResponse response = (NearestCentreGridResponse)baseModelResponse;
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
            DBFacade facade = new NearestCentreSetupDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            NearestCentreResponse response = (NearestCentreResponse) baseModelResponse;
            return response;
        }
    }
}
