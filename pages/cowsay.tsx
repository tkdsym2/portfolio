import Link from 'next/link';
import cowsay from 'cowsay-browser';

export default() => (
    <div>
        <p>this page costs hogehoge</p>
        <pre>{cowsay.say({ text: 'i am a big package' })}</pre>
        <Link href="/">
            <a>Go Home</a>
        </Link>
    </div>
);
