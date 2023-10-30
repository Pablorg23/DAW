import java.util.*;
public class U2_AR_Ej3_Pablo {

    public static void main(String[]args){

        Scanner teclado=new Scanner(System.in);
        boolean aux=true;
        int numero1,numero2;

        System.out.println("Introduce un numero entero");
        numero1= teclado.nextInt();

        System.out.println("introduce un numero entero");
        numero2=teclado.nextInt();

        if(numero1==0 || numero2==0){


            System.out.println(aux);

        }
        else if(numero1==numero2){
            aux=false;
            System.out.println(aux);


        }else{
            
            System.out.println(aux);
        }


    }
}
