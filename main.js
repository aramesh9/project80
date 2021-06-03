name_of_student_array=[];
function submit(){
    var display_stdnt_array=[];

    for(var j=1;j<=5;j++)
    {
        var nme_stdnt=document.getElementById("name_of_the_student_"+j).value;
        console.log(nme_stdnt);
        name_of_student_array.push(nme_stdnt);
    }

    console.log(name_of_student_array);

    var length_of_array=name_of_student_array.length;
    console.log(length_of_array);

    for(var k=0;k<length_of_array;k++)
    {
        display_stdnt_array.push("<h4>Name - "+name_of_student_array[k]+"</h4>");
        console.log(display_stdnt_array);
    }

    console.log(display_stdnt_array);
    document.getElementById("display_nme_commas").innerHTML=display_stdnt_array;

    var rmve_comma=display_stdnt_array.join(" ");
    console.log(rmve_comma);
    document.getElementById("dispaly_nme_wht_commas").innerHTML=rmve_comma;


    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}
function sorting(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    var display_stdnt_sorting=[];
    var length_array_sort=name_of_student_array.length;
    console.log(length_array_sort);

    for(var i=0;i<length_array_sort;i++)
    {
        display_stdnt_sorting.push("<h4>Name - "+name_of_student_array[i]+"</h4>");
        console.log(display_stdnt_sorting);
    }
    var rmve_comma=display_stdnt_sorting.join(" ");
    console.log(rmve_comma);
    document.getElementById("dispaly_nme_wht_commas").innerHTML=rmve_comma;
}

function search()
{
    var s=document.getElementById("search_input").value;
    var found=0;
    var j;
    for (j=0; j<name_of_student_array.length; j++)
    {
        if(s==name_of_student_array[j]){
            found=found+1;
        }
    }
    document.getElementById("searched").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}