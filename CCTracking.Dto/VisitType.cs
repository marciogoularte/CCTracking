namespace CCTracking.Dto
{
    public class VisitType :  BaseModel
    {
        public string Name { get; set; }
    }

    public class VisitTypeGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
