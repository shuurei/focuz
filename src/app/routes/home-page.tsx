import Button from '@/components/ui/button'
import { Edit, Trash } from "lucide-react"

export default function HomePage() {
    return (
        <main className='flex flex-col items-center gap-2 *:flex *:gap-4'>
            <div>
                <Button href='https://youtube.com'>Créer</Button>
                <Button to='/counter' filled>Créer</Button>
            </div>
            <div>
                <Button variant='green'>Sauvegarder</Button>
                <Button variant='green' filled>Sauvegarder</Button>
            </div>
            <div>
                <Button variant='orange'>Modifier</Button>
                <Button variant='orange' filled>Modifier</Button>
            </div>
            <div>
                <Button variant='orange' rightIcon={<Edit size={18} />}>Supprimer</Button>
                <Button variant='orange' filled rightIcon={<Edit size={18} />}>Supprimer</Button>
            </div>
            <div>
                <Button variant='red'>Supprimer</Button>
                <Button variant='red' filled>Supprimer</Button>
            </div>
            <div>
                <Button variant='red' rightIcon={<Trash size={18} />}>Supprimer</Button>
                <Button variant='red' filled rightIcon={<Trash size={18} />}>Supprimer</Button>
            </div>
        </main>
    );
}