import Card from '../components/card/Card'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'
import SectionBreak from '../components/sectionbreak/SectionBreak'
import ContactForm from '../components/contactForm/ContactForm'

function Home() {
  return(
    <Layout>
      <title>tabname here</title>
      <Hero
      heading="hey idadud"
      subheading="here is some of my favorite candy"
      buttonText="Learn more"
      bgImage="/bgGif.Gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
      <Card
        image="/project.jpeg"
        alt="rains rocking robot"
        title="kaitlynn's rocking drone"
        text="Lorem ipsum dolor sit amet"
        buttonText="A fine addition to my collection"
        buttonLink="https://www.youtube.com/watch?v=hitd55VzUo0"
        />
         <Card
        image="/project.jpeg"
        alt="rains rocking robot"
        title="kaitlynn's rocking drone"
        text="Lorem ipsum dolor sit amet"
        buttonText="A fine addition to my collection"
        buttonLink="https://www.youtube.com/watch?v=NAbvyAqtILE"
        />
         <Card
        image="/project.jpeg"
        alt="rains rocking robot"
        title="kaitlynn's rocking drone"
        text="Lorem ipsum dolor sit amet"
        buttonText="A fine addition to my collection"
        buttonLink="https://www.youtube.com/watch?v=nsn9ksuMvhw"
        />
        </div>
        <ContactForm />
    </Layout>
  )
}

export default Home
