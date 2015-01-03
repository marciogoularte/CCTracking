using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class PaymentTypeResponse : BaseModelResponse
    {
        public PaymentType PaymentTypeModel { get; set; }
        public List<PaymentType> PaymentTypeList { get; set; }
    }
}
