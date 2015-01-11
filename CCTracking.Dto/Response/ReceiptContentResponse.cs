using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto.Response
{
    public class ReceiptContentResponse : BaseModelResponse
    {
        public ReceiptContent ReceiptContentModel { get; set; }
        public List<ReceiptContent> ReceiptContentList { get; set; }
    }
}
