import {Hero, Footer, CustomerReviews, PopularProducts, Services, SpecialOffers,Subscribe,SuperQuality} from './sections';
import Navbar from './Components/Navbar';
const App = () =>(
   <main className="relative">
      <Navbar/>
     <section className="xl:padding-l wide:padding-r padding-b">
     <Hero/>
     </section>
     <section className="padding">
      <PopularProducts/>
     </section>
     <section className="padding">
      <SuperQuality/>
     </section>
     <section className="padding-x py-10">
      <Services/>
     </section>
     <section className="padding">
      <SpecialOffers/>
     </section>
     <section className="bg-pale-blue padding">
      <CustomerReviews/>
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
     </section>
     <section className="bg-black padding-t padding-x pb-8">
      <Footer/>
     </section>
   </main>
)

export default App;