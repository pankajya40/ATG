import Card from "./Card";

export default function Listing() {
  return (
    <div className="container mt-5 listings px-4 px-md-0">
      <div className="row gap-5 justify-content-between">
        <Card
          icon="bi  bi-people-fill"
          title="People"
          description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
          buttonContent="connect"
        />
        <Card
          icon="bi bi-geo-alt-fill"
          title="Place"
          description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
          buttonContent="Meet Up"
        />
        <Card
          icon="bi bi-cart-fill"
          title="Product"
          description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
          buttonContent="Got it"
        />
        <Card
          icon="bi bi-calendar2-check-fill"
          title="Program"
          description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
          buttonContent="Attend"
        />
      </div>
    </div>
  );
}
