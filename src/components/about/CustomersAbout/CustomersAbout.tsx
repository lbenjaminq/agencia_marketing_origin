import { Customers } from "components/common";

function CustomersAbout() {
  return (
    <div className="mx-12 px-4 leading-10 mt-28">
      <h2 className="text-6xl font-semibold">Our Clients</h2>
      <p className="text-lg pt-14">We believe brands are the cultural connection between companies and their communities.</p>
      <Customers />
    </div>
  )
}
export default CustomersAbout;