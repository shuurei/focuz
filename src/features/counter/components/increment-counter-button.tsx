import { useCounterStore } from '../stores/useCounterStore'

export default function IncrementCounterButton() {
    const increment = useCounterStore((s) => s.increment);

    return (
        <button
            className='px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition'
            onClick={increment}
        >+</button>
    );
}