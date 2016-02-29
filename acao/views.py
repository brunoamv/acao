from django.template.context import RequestContext
from django.shortcuts import redirect, render_to_response
from .models import Parlamentar,Comissoes,Frente,FrenteParlamentar,ComissaoParlamentar
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect

import simplejson


def go_to_login(request):
    responseDict = {}
    return render_to_response('login.html', responseDict, context_instance=RequestContext(request))

def authentic_user(request):
    email = request.POST.get('email')
    next_url = request.POST.get('next')
    pwd = request.POST.get('pwd')
    try:
        user = authenticate(username=email, password=pwd)
        if user is not None:
            if user.is_active:
                login(request, user)
                if (len(next_url) == 0):
                    return HttpResponseRedirect('/')
                else:
                    return HttpResponseRedirect(next_url)
        else:
            return HttpResponseRedirect('/login?msg=faio')
    except Exception, e:
        print e
        raise e

def logout_user(request):
    logout(request)
    return HttpResponseRedirect('/')

@login_required(login_url='/login/')
def go_to_index(request):
    responseDict = {}
    print 'CHEGOU index'
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


def detail_parlamentar_comissoes(request,id_parlamentar):
    responseDict = {}
    parlamentarComissao_list = []
    print id_parlamentar
    try:
        parlamentarComissoes = ComissaoParlamentar.objects.filter(parlamentar_id=id_parlamentar)
        print parlamentarComissoes
        for parlamentarComissao in parlamentarComissoes:
            print parlamentarComissao
            print parlamentarComissao.comissao_id
            comissoes = Comissoes.objects.get(id=parlamentarComissao.comissao_id)
            parlamentarComissao_list.append(comissoes.toJSON())
        responseDict['parlamentarComissoes'] = parlamentarComissao_list
        return jsonResponse(responseDict)
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

def detail_parlamentar_frentes(request,id_parlamentar):
    responseDict = {}
    parlamentarFrente_list = []
    print id_parlamentar
    try:
        parlamentarFrentes = FrenteParlamentar.objects.filter(parlamentar_id=id_parlamentar)
        print parlamentarFrentes
        for parlamentarFrente in parlamentarFrentes:
            print parlamentarFrente
            print parlamentarFrente.frente_id
            frentes = Frente.objects.get(id=parlamentarFrente.frente_id)
            parlamentarFrente_list.append(frentes.toJSON())
        responseDict['parlamentarFrentes'] = parlamentarFrente_list
        return jsonResponse(responseDict)
    except Exception, e:
        print e
        return jsonResponse({'success': 'false'})

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



def detail_comissao_parlamentares(request,id_comissao):
    responseDict = {}
    comissaoParlamentar_list = []
    print id_comissao
    try:
        comissaoParlamentares = ComissaoParlamentar.objects.filter(comissao_id=id_comissao)
        print comissaoParlamentares
        for comissaoParlamentar in comissaoParlamentares:
            print comissaoParlamentar
            print comissaoParlamentar.parlamentar_id
            parlamentares = Parlamentar.objects.get(id=comissaoParlamentar.parlamentar_id)
            comissaoParlamentar_list.append(parlamentares.toJSON())
        responseDict['comissaoParlamentares'] = comissaoParlamentar_list
        return jsonResponse(responseDict)
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