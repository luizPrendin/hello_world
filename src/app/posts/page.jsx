import Link from "next/link";
import Image from "next/image";

export default function Post1(){

    return(
        <div>
            <h1>Post1</h1>
            <Image>

            </Image>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis harum hic cupiditate excepturi illo minima, perferendis doloribus! Sed, doloremque. Natus voluptates sint aliquid officiis vitae harum nulla vero nisi eaque pariatur officia expedita quisquam voluptatem, laborum iure iste quibusdam, quod ratione aperiam maiores magni quos! Voluptas nobis eaque numquam 
            reprehenderit!</p>

            <p><Link href={"/"}>Pagina inicial</Link></p>

            <figure>
                <figcaption>Post-1</figcaption>
                <Image src="/img/Captura de Tela (1).png"
                width={320}
                height={320}
                alt="Area de trabalho"/>
            </figure>

        </div>
    )
}