namespace CCTracking.Dto
{
    public class RefundType :  BaseModel
    {
        public string Name { get; set; }
    }

    public class RefundTypeGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
