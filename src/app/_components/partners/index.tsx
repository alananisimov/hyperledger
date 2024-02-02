import Marquee from "react-fast-marquee";
import PartnerCard from "./partner-card";

type Partner = {
  image: string;
};

const partners: Partner[] = [
  { image: "/partners/AbsaBankLimited.svg" },
  { image: "/partners/american-express.webp" },
  { image: "/partners/Bosch-brand.svg" },
  { image: "/partners/casper-labs-llc-member.svg" },
  { image: "/partners/chainyard-member-1.svg" },
  { image: "/partners/circulor-ltd-member.svg" },
  { image: "/partners/consensys.png" },
  { image: "/partners/finos-member-accenture-5-platinum.webp" },
  { image: "/partners/Fujitsu.webp" },
  { image: "/partners/logo_ibm.webp" },
  { image: "/partners/new-btp.webp" },
];

export default function Partners() {
  return (
    <div className="py-2" id="benefits">
      <Marquee className="" autoFill>
        <div className="inline-flex gap-x-4">
          {partners.map((partner, index) => {
            if (index === 0)
              return (
                <div className="ml-4">
                  <PartnerCard key={index} image={partner.image} />
                </div>
              );
            return <PartnerCard key={index} image={partner.image} />;
          })}
        </div>
      </Marquee>
      <Marquee className="" delay={2} autoFill>
        <div className="inline-flex gap-x-4">
          {partners
            .slice()
            .reverse()
            .map((partner, index) => {
              if (index === 0)
                return (
                  <div className="ml-4">
                    <PartnerCard key={index} image={partner.image} />
                  </div>
                );
              return <PartnerCard key={index} image={partner.image} />;
            })}
        </div>
      </Marquee>
    </div>
  );
}
