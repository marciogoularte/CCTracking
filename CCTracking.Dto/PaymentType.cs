namespace CCTracking.Dto
{
    public class PaymentType :  BaseModel
    {
        public string Name { get; set; }
    }

    public class PaymentTypeGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
