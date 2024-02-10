import Image from "next/image";

const Features = () => {
  return (
    <div className="space-y-10 mx-5 md:mx-20">
      <h2 className="flex justify-center items-center text-4xl font-bold">
        Features
      </h2>

      {/* FEATURE 1 */}
      <div className="flex justify-center items-center flex-col md:mx-10 md:flex-row">
        <div className="w-full flex justify-center items-center">
          <Image src="/MAIN.png" width={500} height={200}></Image>
        </div>{" "}
        <div>
          <h3>HEADING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            expedita repudiandae qui ab, veritatis alias quidem quibusdam, saepe
            in a labore delectus possimus. Voluptatibus totam vitae ipsam! Odit
            architecto corporis blanditiis tenetur eaque quisquam!
          </p>
        </div>
      </div>

      {/* FEATURE 1 */}
      <div className="flex justify-center items-center flex-col-reverse md:mx-10 md:flex-row">
        <div>
          <h3>HEADING</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            expedita repudiandae qui ab, veritatis alias quidem quibusdam, saepe
            in a labore delectus possimus. Voluptatibus totam vitae ipsam! Odit
            architecto corporis blanditiis tenetur eaque quisquam!
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image src="/MAIN.png" width={500} height={200}></Image>
        </div>{" "}
      </div>
    </div>
  );
};

export default Features;
