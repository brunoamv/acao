from django.template.context import RequestContext
from django.shortcuts import redirect, render_to_response
from .models import Parlamentar,Comissoes,Frente,FrenteParlamentar
from django.http import HttpResponse
import simplejson

def go_to_index(request):
    responseDict = {}
    return render_to_response('index.html', responseDict, context_instance=RequestContext(request))

def go_to_parlamentares(request):
    responseDict = {}
    #parlamentares_list = []
    #parlamentares = Parlamentar.objects.all()
    #for parlamentar in parlamentares:
    #    parlamentares_list.append(parlamentar.toJSON())
    #responseDict['parlamentares'] = parlamentares_list
    return render_to_response('parlamentares.html', responseDict, context_instance=RequestContext(request))

def listar_parlamentares(request):
    responseDict = {}
    parlamentares_list = []
    parlamentares = Parlamentar.objects.all()
    for parlamentar in parlamentares:
        parlamentares_list.append(parlamentar.toJSON())
    responseDict['parlamentares'] = parlamentares_list
    return jsonResponse(responseDict)


def detail_parlamentares(request, id_parlamentar):
    responseDict = {}
    parlamentar = Parlamentar.objects.get(id=id_parlamentar)
    return jsonResponse(parlamentar.toJSON())

def create_parlamentar(request):
    nome_to_save = request.POST.get('nome_to_save')
    uf_to_save = request.POST.get('uf_to_save')
    celular_to_save = request.POST.get('celular_to_save')
    telefone_to_save = request.POST.get('telefone_to_save')
    fax_to_save = request.POST.get('fax_to_save')
    titular_to_save = request.POST.get('titular_to_save')
    gabinete_to_save = request.POST.get('gabinete_to_save')
    anexo_to_save = request.POST.get('anexo_to_save')
    profissoes_to_save = request.POST.get('profissoes_to_save')
    aniversario_to_save = request.POST.get('aniversario_to_save')
    nome_civil_to_save = request.POST.get('nome_civil_to_save')
    tratamento_to_save = request.POST.get('tratamento_to_save')

    print request.POST.get('nome_to_save')
    print nome_to_save
    print 'vai'

    parlamentar_to_save = Parlamentar()
    parlamentar_to_save.nome = nome_to_save
    parlamentar_to_save.uf = uf_to_save
    parlamentar_to_save.celular = celular_to_save
    parlamentar_to_save.telefone = telefone_to_save
    parlamentar_to_save.fax = fax_to_save
    parlamentar_to_save.titular = titular_to_save
    parlamentar_to_save.gabinete = gabinete_to_save
    parlamentar_to_save.anexo = anexo_to_save
    parlamentar_to_save.profissoes = profissoes_to_save
    parlamentar_to_save.aniversario = aniversario_to_save
    parlamentar_to_save.nome_civil = nome_civil_to_save
    parlamentar_to_save.tratamento = tratamento_to_save
    print parlamentar_to_save.nome
    try:
        parlamentar_to_save.save()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def update_parlamentar(request):
    id_to_save = request.POST.get('id_to_save')
    nome_to_save = request.POST.get('nome_to_save')
    uf_to_save = request.POST.get('uf_to_save')
    celular_to_save = request.POST.get('celular_to_save')
    telefone_to_save = request.POST.get('telefone_to_save')
    fax_to_save = request.POST.get('fax_to_save')
    titular_to_save = request.POST.get('titular_to_save')
    gabinete_to_save = request.POST.get('gabinete_to_save')
    anexo_to_save = request.POST.get('anexo_to_save')
    profissoes_to_save = request.POST.get('profissoes_to_save')
    aniversario_to_save = request.POST.get('aniversario_to_save')
    nome_civil_to_save = request.POST.get('nome_civil_to_save')
    tratamento_to_save = request.POST.get('tratamento_to_save')

    print request.POST.get('nome_to_save')
    print nome_to_save
    print 'vai'

    parlamentar_to_save = Parlamentar.objects.get(id=id_to_save)
    parlamentar_to_save.nome = nome_to_save
    parlamentar_to_save.uf = uf_to_save
    parlamentar_to_save.celular = celular_to_save
    parlamentar_to_save.telefone = telefone_to_save
    parlamentar_to_save.fax = fax_to_save
    parlamentar_to_save.titular = titular_to_save
    parlamentar_to_save.gabinete = gabinete_to_save
    parlamentar_to_save.anexo = anexo_to_save
    parlamentar_to_save.profissoes = profissoes_to_save
    parlamentar_to_save.aniversario = aniversario_to_save
    parlamentar_to_save.nome_civil = nome_civil_to_save
    parlamentar_to_save.tratamento = tratamento_to_save
    print parlamentar_to_save.nome
    try:
        parlamentar_to_save.save()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def delete_parlamentar(request):
    id_parlamentar = request.POST.get('id_to_delete')
    parlamentar = Parlamentar.objects.get(pk=id_parlamentar)
    try:
        parlamentar.delete()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

    return jsonResponse({'success': 'true'})


def go_to_comissao(request):
    responseDict = {}
    return render_to_response('comissao.html', responseDict, context_instance=RequestContext(request))

def listar_comissoes(request):
    responseDict = {}
    comissoes_list = []
    comissoes = Comissoes.objects.all()
    for comissao in comissoes:
        comissoes_list.append(comissao.toJSON())
    responseDict['comissoes'] = comissoes_list
    return jsonResponse(responseDict)

def detail_comissao(request,id_comissao):
    responseDict = {}
    comissao = Comissoes.objects.get(id=id_comissao)
    return jsonResponse(comissao.toJSON())

def create_comissao(request):
    sigla_to_save = request.POST.get('sigla_to_save')
    nome_to_save = request.POST.get('nome_to_save')
    indicado_to_save = request.POST.get('indicado_to_save')
    condicao_to_save = request.POST.get('condicao_to_save')

    comissao_to_save = Comissoes()
    comissao_to_save.sigla = sigla_to_save
    comissao_to_save.nome = nome_to_save
    comissao_to_save.indicado = indicado_to_save
    comissao_to_save.condicao = condicao_to_save
    try:
        comissao_to_save.save()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def delete_comissao(request):
    id_comissao = request.POST.get('id_to_delete')
    comissao = Comissoes.objects.get(pk=id_comissao)
    try:
        comissao.delete()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

    return jsonResponse({'success': 'true'})

def update_comissao(request):
    id_to_update = request.POST.get('id_to_save')
    sigla_to_save = request.POST.get('sigla_to_save')
    nome_to_save = request.POST.get('nome_to_save')
    indicado_to_save = request.POST.get('indicado_to_save')
    condicao_to_save = request.POST.get('condicao_to_save')

    comissao_to_save = Comissoes.objects.get(id=id_to_update)
    comissao_to_save.sigla = sigla_to_save
    comissao_to_save.nome = nome_to_save
    comissao_to_save.indicado = indicado_to_save
    comissao_to_save.condicao = condicao_to_save
    try:
        comissao_to_save.save()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def go_to_frente(request):
    responseDict = {}
    return render_to_response('frente.html', responseDict, context_instance=RequestContext(request))

def listar_frente(request):
    responseDict = {}
    frente_list = []
    frentes = Frente.objects.all()
    for frente in frentes:
        frente_list.append(frente.toJSON())
    responseDict['frentes'] = frente_list
    return jsonResponse(responseDict)

def detail_frente_parlamentares(request,id_frente):
    responseDict = {}
    frenteParlametar_list = []
    print id_frente
    try:
        frenteParlametares = FrenteParlamentar.objects.filter(frente_id=id_frente)
        print frenteParlametares
        for frenteParlametar in frenteParlametares:
            print frenteParlametar
            print frenteParlametar.parlamentar_id
            parlamentares = Parlamentar.objects.get(id=frenteParlametar.parlamentar_id)
            frenteParlametar_list.append(parlamentares.toJSON())
        responseDict['frenteParlametares'] = frenteParlametar_list
        return jsonResponse(responseDict)
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def create_frente_parlamentares(request,id_frente):


    return jsonResponse(responseDict)



def detail_frente(request, id_frente):
    responseDict = {}
    frente = Frente.objects.get(id=id_frente)
    return jsonResponse(frente.toJSON());

def detail_frente_old(request, id_frente):
    responseDict = {}
    frente = Frente.objects.get(id=id_frente)
    responseDict["frente"] = frente.toJSON()
    return render_to_response('frente_detalhe.html', responseDict, context_instance=RequestContext(request))

def create_frente(request):
    ano_to_save = request.POST.get('ano_to_save')
    tipo_to_save = request.POST.get('tipo_to_save')
    sigla_to_save = request.POST.get('sigla_to_save')
    nome_to_save = request.POST.get('nome_to_save')

    frente_to_save = Frente()
    frente_to_save.sigla = sigla_to_save
    frente_to_save.ano = ano_to_save
    frente_to_save.nome = nome_to_save
    frente_to_save.tipo = tipo_to_save
    try:
        frente_to_save.save()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def update_frente(request):
    id_to_update = request.POST.get('id_to_save')
    ano_to_update = request.POST.get('ano_to_save')
    tipo_to_update = request.POST.get('tipo_to_save')
    sigla_to_update = request.POST.get('sigla_to_save')
    nome_to_update = request.POST.get('nome_to_save')

    frente_to_update = Frente.objects.get(id=id_to_update)
    frente_to_update.sigla = sigla_to_update
    frente_to_update.ano = ano_to_update
    frente_to_update.nome = nome_to_update
    frente_to_update.tipo = tipo_to_update
    try:
        frente_to_update.save()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})


def delete_frente(request):
    id_frente = request.POST.get('id_to_delete')
    frente = Frente.objects.get(pk=id_frente)
    try:
        frente.delete()
        return jsonResponse({'success': 'true'})
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

    return jsonResponse({'success': 'true'})



def jsonResponse(responseDict):
   return HttpResponse(simplejson.dumps(responseDict), content_type='application/json')