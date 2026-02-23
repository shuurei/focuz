import { Edit, Trash } from 'lucide-react'

import Button from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { TextInput } from '@/components/ui/text-input';

export default function HomePage() {
    return (
        <main className='flex flex-col gap-5 items-center'>
            <nav>
                <Button
                    variant='purple'
                    as='link'
                    to='/counter'
                >Counter Page</Button>
            </nav>

            <div className='flex flex-col items-center gap-2 *:flex *:gap-4 *:flex-wrap *:justify-center'>
                {/* Buttons */}
                <div>
                    <Button>Créer</Button>
                    <Button filled>Créer</Button>
                    <Button disabled>Créer</Button>
                    <Button filled disabled>Créer</Button>
                </div>
                <div>
                    <Button variant='green'>Sauvegarder</Button>
                    <Button variant='green' filled>Sauvegarder</Button>
                    <Button variant='green' disabled>Sauvegarder</Button>
                    <Button variant='green' filled disabled>Sauvegarder</Button>
                </div>
                <div>
                    <Button variant='orange'>Modifier</Button>
                    <Button variant='orange' filled>Modifier</Button>
                    <Button variant='orange' disabled>Modifier</Button>
                    <Button variant='orange' filled disabled>Modifier</Button>
                </div>
                <div>
                    <Button variant='orange' rightIcon={<Edit size={18} />}>Modifier</Button>
                    <Button variant='orange' filled rightIcon={<Edit size={18} />}>Modifier</Button>
                    <Button variant='orange' disabled rightIcon={<Edit size={18} />}>Modifier</Button>
                    <Button variant='orange' filled disabled rightIcon={<Edit size={18} />}>Modifier</Button>
                </div>
                <div>
                    <Button variant='red'>Supprimer</Button>
                    <Button variant='red' filled>Supprimer</Button>
                    <Button variant='red' disabled>Supprimer</Button>
                    <Button variant='red' filled disabled>Supprimer</Button>
                </div>
                <div>
                    <Button variant='red' rightIcon={<Trash size={18} />}>Supprimer</Button>
                    <Button variant='red' filled rightIcon={<Trash size={18} />}>Supprimer</Button>
                    <Button variant='red' disabled rightIcon={<Trash size={18} />}>Supprimer</Button>
                    <Button variant='red' disabled filled rightIcon={<Trash size={18} />}>Supprimer</Button>
                </div>
                <div>
                    <Button variant='gray' as='a' href='https://oxyfoo.fr/project/gamelife' target='_blank'>GameLife</Button>
                    <Button variant='gray' as='a' href='https://oxyfoo.fr/project/gamelife' target='_blank' filled>GameLife</Button>
                </div>
                {/* Checkbox */}
                <div>
                    <Checkbox label='Lorem Ipsum' />
                    <Checkbox label='Lorem Ipsum' disabled defaultChecked />
                </div>
                <div>
                    <Checkbox defaultChecked />
                    <Checkbox disabled />
                </div>
                <div>
                    <Checkbox variant='green' label='Lorem Ipsum' />
                    <Checkbox variant='green' label='Lorem Ipsum' disabled defaultChecked />
                </div>
                <div>
                    <Checkbox variant='green' defaultChecked />
                    <Checkbox variant='green' disabled />
                </div>
                <div>
                    <Checkbox variant='orange' label='Lorem Ipsum' defaultChecked />
                    <Checkbox variant='orange' label='Lorem Ipsum' disabled />
                </div>
                <div>
                    <Checkbox variant='orange' />
                    <Checkbox variant='orange' disabled defaultChecked />                    
                </div>
                <div>
                    <Checkbox variant='red' label='Lorem Ipsum' defaultChecked />
                    <Checkbox variant='red' label='Lorem Ipsum' disabled />
                </div>
                <div>
                    <Checkbox variant='red' />
                    <Checkbox variant='red' defaultChecked disabled />                    
                </div>
                <div>
                    <Checkbox variant='purple' label='Lorem Ipsum' />
                    <Checkbox variant='purple' label='Lorem Ipsum' disabled defaultChecked />
                </div>
                <div>
                    <Checkbox variant='purple' defaultChecked />
                    <Checkbox variant='purple' disabled />                    
                </div>
                {/* Text inputs */}
                <TextInput
                    as='textarea'
                    placeholder='Lorem Ipsum'
                    label='Username'
                    color='green'
                />
                <div>
                    <TextInput
                        as='password'
                        placeholder='Lorem Ipsum'
                        label='Username'
                    />
                    <TextInput
                        label='Username'
                        as='password'
                        placeholder='Lorem Ipsum'
                        value='LOOOOL'
                        disabled
                    />
                </div>
                <div>
                    <TextInput label='Lorem Ipsum' placeholder='Lorem Ipsum' />
                    <TextInput label='Lorem Ipsum' placeholder='Lorem Ipsum' disabled />
                </div>
                <div>
                    <TextInput color='green' placeholder='Lorem Ipsum' />
                    <TextInput color='green' placeholder='Lorem Ipsum' disabled />
                </div>
                <div>
                    <TextInput color='green' label='Lorem Ipsum' placeholder='Lorem Ipsum' />
                    <TextInput color='green' label='Lorem Ipsum' placeholder='Lorem Ipsum' disabled />
                </div>
                <div>
                    <TextInput color='orange' placeholder='Lorem Ipsum' />
                    <TextInput color='orange' placeholder='Lorem Ipsum' disabled />
                </div>
                <div>
                    <TextInput color='orange' label='Lorem Ipsum' placeholder='Lorem Ipsum' />
                    <TextInput value='test' as='password' color='orange' label='Lorem Ipsum' placeholder='Lorem Ipsum' disabled />
                </div>
                <div>
                    <TextInput
                        color='red' placeholder='Lorem Ipsum'
                    />
                    <TextInput color='red' placeholder='Lorem Ipsum' disabled />
                </div>
                <div>
                    <TextInput color='red' label='Lorem Ipsum' placeholder='Lorem Ipsum' />
                    <TextInput color='red' label='Lorem Ipsum' placeholder='Lorem Ipsum' disabled />
                </div>
            </div>
        </main>
    );
}