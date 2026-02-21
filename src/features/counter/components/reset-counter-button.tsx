import { useCounterStore } from '../stores/useCounterStore'

export default function ResetCounterButton() {
    const reset = useCounterStore((s) => s.reset);

    return (
        <button
            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition'
            onClick={reset}
        >Reset</button>
    );
}