import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (
    <div className='w-full h-auto flex flex-col background items-center'>

      <h1 className='bg-white w-11/12 rounded-sm text-center mt-[30px] text-2xl font-bold py-2'>Random GIFS</h1>

      <div className='flex flex-col w-full items-center gap-y-10 mt-[15px] mb-[15px]'>
        <Random />
        <Tag />
      </div>

    </div>
  );
}
