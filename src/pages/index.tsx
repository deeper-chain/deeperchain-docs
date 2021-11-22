import * as React from 'react'
import Lottie from 'react-lottie'
import Icon from '../components/Icon'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Section from '../components/layout/Section'
import { PrimaryFixedButton } from '../components/Buttons'
import DocCard from '../components/layout/homepage/DocCard'
import CommunityCard from '../components/layout/homepage/CommunityCard'
import { StaticImage } from 'gatsby-plugin-image'
import { SecondaryButton } from '../components/Buttons'
import ExploreDocs from '../components/layout/homepage/ExploreDocs'
import * as animationData from '../images/animations/dev-hero.json'
import Link from '../components/Link'
import ExploreLinkSection from '../components/layout/homepage/ExploreLinkSection'



export default function Index() {
  return (
    <Layout>
      <SEO title="Developer Home" />
      <Section styles="mt-12">
        <div className="flex flex-col md:flex-row md:items-center doc-hero">
          <div className="md:w-1/2 mb-10 lg:m-0">
            <div className="text-5xl lg:text-6xl font-extrabold mb-6">
              DeeperChain <br /> Developer Hub
            </div>
            <h4 className="text-xl xl:text-3xl font-semibold">
            The Decentralized Gateway and Infrastructure for Web3.0
            </h4>
            <p className=" max-w-lg text-xl">
            Deeper Network combines blockchain, network security, and sharing economy to create a global peer to peer network that empowers the real users of the internet and paves the way for the next generation of the web.
            </p>
            <PrimaryFixedButton hero link="/v3/">
              QuickStart
            </PrimaryFixedButton>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="lg:h-[450px] lg:w-[700px] lg:mt-8">
            <StaticImage
              backgroundColor="transparent"
              src="../images/photos/homepage/deeper.png"
              alt="Connect With DeeperNetwork"
              layout="constrained"
              className="rounded-lg overflow-hidden"
            />
              
            </div>
          </div>
        </div>
      </Section>
      {/* Learn Subsrate Section */}
      <Section styles="relative">
        <div className="lg:p-6 lg:pr-0 md:w-1/2">
          <div className="lg:hidden">
            <StaticImage
              src={'../images/backgrounds/backgroundTwo.png'}
              alt={'Learn DeeperNetwork Background'}
              loading="eager"
              placeholder="none"
              layout="constrained"
            />
          </div>
          <div className="hidden lg:block">
            <StaticImage
              src={'../images/backgrounds/backgroundOne.png'}
              alt={'Learn DeeperNetwork Background'}
              loading="eager"
              placeholder="none"
            />
          </div>
        </div>
        <div className="h-full relative">
          <div className="text-center mb-16">
            <div className="text-5xl lg:text-6xl font-extrabold mb-3">
              Learn DeeperNetwork
            </div>
            <h4 className="text-xl xl:text-3xl font-semibold">
            DeeperNetwork developer knowledge base
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:flex flex-col lg:flex-row lg:justify-between z-10">
            <DocCard
              title={`Documentation`}
              text={`Discover the principles and design decisions that DeeperNetwork is built on. Read about its key features and capabilties as well as the specific skills needed to be an effective Substrate blockchain developer.`}
              link={`/v3/`}
              cta={`Get started`}
              iconName={`docsIcon`}
            />
            <DocCard
              title={`How-To Guides`}
              text={`The DeeperNetwork how-to guides have everything you need to produce robust DeeperNetwork based blockchains. From beginner to expert, you can use them flexibly to suit your current needs.`}
              link={`/how-to-guides/`}
              cta={`Learn and contribute`}
              iconName={`htgIcon`}
              animationDelay={200}
            />
            <DocCard
              title={`Tutorials`}
              text={`Create your first Deeper chain, perform a forkless upgrade, and more. This selection of tutorials will lead you through the process in sessions of up to two hours.`}
              link={`/tutorials/`}
              cta={`Dive in`}
              iconName={`tutsIcon`}
              animationDelay={400}
            />
          </div>
        </div>
      </Section>
      {/* Playground Section */}
      
      {/* Explore Documentation Section */}
      <Section>
        <div className="mb-14">
          <div className="text-4xltext-5xl lg:text-6xl font-extrabold mb-8 break-normal">
            Explore Documentation
          </div>
          <div className="text-xl">
            Browse through the use case specific highlights that meet your
            needs.
          </div>
        </div>
        <div className="md:flex md:justify-start xl:justify-between">
          <ExploreDocs />
        </div>
      </Section>
      {/* Connect With Community Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-center mb-10">
          <div className="lg:m-0 md:w-1/2">
            <div className="text-5xl lg:text-6xl font-extrabold mb-8">
              Connect with <br /> the community
            </div>
            <p className="max-w-lg text-xl">
              Network, share and learn from others who speak your (tech)
              language! Discover the various open communication channels where
              you can engage, participate and keep up with the latest
              developments.
            </p>
          </div>
          <div className="lg:p-6 lg:pr-0 md:w-1/2">
            <StaticImage
              backgroundColor="transparent"
              src="../images/photos/homepage/connect-with-the-community.jpg"
              alt="Connect With DeeperNetwork Community"
              layout="constrained"
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CommunityCard />
        </div>
      </Section>
      <ExploreLinkSection links={['technology', 'vision', 'ecosystem']} />
    </Layout>
  )
}
