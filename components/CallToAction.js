import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-blue-500 py-12 text-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Join Us in Building a Better Future</h2>
      <p className="mb-6">Together, we can transform lives. Your support can make a difference.</p>
      <Link href="/donate">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600">Donate Now</button>
      </Link>
    </section>
  );
};

export default CallToAction;
