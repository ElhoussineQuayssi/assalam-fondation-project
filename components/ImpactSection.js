import { Statistic } from 'antd';

const ImpactSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-lg">Wells Drilled</h3>
            <Statistic value={150} suffix="Wells" />
          </div>
          <div className="text-center">
            <h3 className="text-xl">Schools Built</h3>
            <Statistic value={50} suffix="Schools" />
          </div>
          <div className="text-center">
            <h3 className="text-xl">People Helped</h3>
            <Statistic value={20000} suffix="People" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
