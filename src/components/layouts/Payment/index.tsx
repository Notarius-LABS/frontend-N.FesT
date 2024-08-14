import PaymentContainer from "@/components/fragments/Container/Payment";

export default function Payment() {
  return (
    <div className="">
      <PaymentContainer city="Jakarta"></PaymentContainer>
      <PaymentContainer city="Bandung"></PaymentContainer>
      <PaymentContainer city="Surabaya"></PaymentContainer>
      <PaymentContainer city="Malang"></PaymentContainer>
    </div>
  );
}
