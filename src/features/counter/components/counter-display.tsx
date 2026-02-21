import { useCounterStore } from '../stores/useCounterStore'

export default function CounterDisplay() {
    const count = useCounterStore((s) => s.count);

    return (
        <h2 className='text-2xl font-bold'>Count: {count}</h2>
    );
}