function buildTR1(item) {
    let tr = '<tr>';

    tr += '<td>' + item.id + '</td>';
    tr += '<td>' + item.name + '</td>'
    tr += '<td>' + item.price + '</td>';
    tr += '<td>' + item.currency + '</td>';
    tr += '<td>' + item.sku + '</td>'

    const image = '<img src="' + item.mainImage + '" width="30" height="20">';
    tr += '<td>' + image + '</td>';

    tr += '<td>' + item.createdAt + '</td>';
    tr += '<td>' + item.updatedAt + '</td>'

    const showAction = '<a href="https://www.kwestiasmaku.com/?id=' + item.id + '">show</a>';
    const editLink = '<a href="https://www.zalando.pl/kobiety-home/?id=' + item.id + '">edit</a>';
    const deleteLink = '<a href="https://www.facebook.com/?id=' + item.id + '">delete</a>';

    tr += '<td>' + showAction + editLink + deleteLink + '</td>';

    tr += '</tr>'

    return tr;
}

const table = document.querySelector("#product-list tbody");

let body = '';

for (let i = 0; i < data.length; i++) {
    body += buildTR1(data[i]);
}

table.innerHTML = body
