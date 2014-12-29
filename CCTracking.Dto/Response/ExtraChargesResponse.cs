using System.Collections.Generic;
namespace CCTracking.Dto.Response
{
    public class ExtraChargesResponse : BaseModelResponse
    {
        public ExtraCharges ExtraChargesModel { get; set; }
        public List<ExtraCharges> ExtraChargesList { get; set; }
    }
}
