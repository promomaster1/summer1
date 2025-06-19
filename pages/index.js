import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>تسجيل المركز الصيفي</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-blue-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-right">
          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            تسجيل في المركز الصيفي
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">اسم الطالب</label>
              <input type="text" name="studentName" className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">العمر</label>
              <input type="number" name="age" className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">اسم ولي الأمر</label>
              <input type="text" name="guardianName" className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">رقم الهوية أو الإقامة</label>
              <input type="text" name="guardianID" className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">رقم الجوال</label>
              <input type="tel" name="phone" className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200">
              تسجيل
            </button>
          </form>
        </div>
      </div>
    </>
  );
}